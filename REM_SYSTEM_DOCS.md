# Система динамической адаптации шрифтов по rem

## Обзор

Система динамической адаптации шрифтов по rem обеспечивает автоматическое масштабирование текста в зависимости от размера экрана. Это позволяет создавать отзывчивые интерфейсы, где шрифты адаптируются под разные устройства без необходимости написания множества медиа-запросов.

## Основные принципы

1. **Базовые размеры шрифтов** устанавливаются для разных устройств:

   - Мобильные устройства: 14px
   - Планшеты: 16px
   - Десктопы: 18px
   - Большие экраны: 20px

2. **Все размеры шрифтов** выражаются в rem единицах относительно базового размера
3. **Автоматическое обновление** базового размера при изменении размера экрана
4. **Утилитарные классы** для быстрого применения размеров шрифтов

## Структура файлов

```
src/shared/
├── lib/
│   ├── rem.ts                           # Основные утилиты для работы с rem
│   └── hooks/
│       └── useResponsiveFontSize.ts     # React хуки для динамического обновления
├── styles/
│   ├── _rem_mixins.scss                # SCSS миксины для rem системы
│   ├── _variables.scss                 # CSS переменные для размеров шрифтов
│   └── index.scss                      # Основные стили с утилитарными классами
└── ui/
    └── RemSystemProvider/              # React компонент для инициализации системы
        ├── RemSystemProvider.tsx
        └── index.ts
```

## Использование

### 1. Инициализация системы

Система автоматически инициализируется в `layout.tsx` через `RemSystemProvider`:

```tsx
import { RemSystemProvider } from "@/shared/ui/RemSystemProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RemSystemProvider>{children}</RemSystemProvider>
      </body>
    </html>
  );
}
```

### 2. Использование утилитарных классов

#### Размеры шрифтов

```tsx
// Базовые размеры
<div className="text-xs">Очень маленький текст</div>
<div className="text-sm">Маленький текст</div>
<div className="text-base">Обычный текст</div>
<div className="text-lg">Большой текст</div>
<div className="text-xl">Очень большой текст</div>
<div className="text-2xl">Огромный текст</div>

// Заголовки
<div className="text-h1">Заголовок 1</div>
<div className="text-h2">Заголовок 2</div>
<div className="text-h3">Заголовок 3</div>
<div className="text-h4">Заголовок 4</div>
<div className="text-h5">Заголовок 5</div>
<div className="text-h6">Заголовок 6</div>

// Специальные размеры
<div className="text-body">Основной текст</div>
<div className="text-small">Мелкий текст</div>
<div className="text-caption">Подпись</div>
<div className="text-button">Текст кнопки</div>
<div className="text-label">Метка</div>
```

#### Веса шрифтов

```tsx
<div className="font-thin">Тонкий шрифт</div>
<div className="font-light">Светлый шрифт</div>
<div className="font-normal">Обычный шрифт</div>
<div className="font-medium">Средний шрифт</div>
<div className="font-semibold">Полужирный шрифт</div>
<div className="font-bold">Жирный шрифт</div>
<div className="font-extrabold">Очень жирный шрифт</div>
<div className="font-black">Черный шрифт</div>
```

#### Межстрочные интервалы

```tsx
<div className="leading-none">Без интервала</div>
<div className="leading-tight">Узкий интервал</div>
<div className="leading-snug">Компактный интервал</div>
<div className="leading-normal">Обычный интервал</div>
<div className="leading-relaxed">Широкий интервал</div>
<div className="leading-loose">Очень широкий интервал</div>
```

### 3. Использование компонента Typography

```tsx
import { Typography } from "@/shared/ui/Typography";

// Базовое использование
<Typography>Обычный текст</Typography>

// С настройками
<Typography
  size="h1"
  weight="bold"
  lineHeight="tight"
  color="primary"
>
  Заголовок
</Typography>

// Как заголовок
<Typography as="h1" size="h1" weight="bold">
  Главный заголовок
</Typography>
```

### 4. Использование SCSS миксинов

```scss
.my-component {
  // Адаптивный размер шрифта
  @include responsive-font-size(16px, 18px, 20px, 22px);

  // Или с дополнительными свойствами
  @include responsive-typography(
    16px,
    // mobile
    18px,
    // tablet
    20px,
    // desktop
    22px,
    // large
    1.5,
    // line-height
    600 // font-weight
  );
}

// Предустановленные миксины
.heading {
  @include heading-1; // 32px -> 40px -> 48px -> 56px
}

.body-text {
  @include body-text; // 14px -> 16px -> 18px -> 20px
}
```

### 5. Использование утилитарных функций

```typescript
import { pxToRem, getResponsiveFontSize, FONT_SIZES } from "@/shared/lib/rem";

// Конвертация px в rem
const fontSize = pxToRem(16); // "1rem"

// Получение адаптивного размера
const responsiveSize = getResponsiveFontSize(16, 18, 20, 22);

// Использование предустановленных размеров
const h1Size = FONT_SIZES.h1; // { mobile: 32, tablet: 40, desktop: 48, large: 56 }
```

### 6. Использование React хуков

```tsx
import {
  useResponsiveFontSize,
  useCurrentFontSize,
  useCurrentBreakpoint,
} from "@/shared/lib/hooks/useResponsiveFontSize";

function MyComponent() {
  // Автоматическое обновление базового размера шрифта
  useResponsiveFontSize();

  // Получение текущего базового размера
  const currentFontSize = useCurrentFontSize(); // 14, 16, 18 или 20

  // Получение текущего брейкпоинта
  const breakpoint = useCurrentBreakpoint(); // 'mobile', 'tablet', 'desktop', 'large'

  return (
    <div>
      <p>Текущий размер шрифта: {currentFontSize}px</p>
      <p>Текущий брейкпоинт: {breakpoint}</p>
    </div>
  );
}
```

## CSS переменные

Система предоставляет следующие CSS переменные:

### Базовые размеры шрифтов

```css
--base-font-size-mobile: 14px;
--base-font-size-tablet: 16px;
--base-font-size-desktop: 18px;
--base-font-size-large: 20px;
--current-base-font-size: var(--base-font-size-mobile);
```

### Размеры шрифтов в rem

```css
--font-size-xs: 0.75rem; /* 12px при базовом размере 16px */
--font-size-sm: 0.875rem; /* 14px при базовом размере 16px */
--font-size-base: 1rem; /* 16px при базовом размере 16px */
--font-size-lg: 1.125rem; /* 18px при базовом размере 16px */
--font-size-xl: 1.25rem; /* 20px при базовом размере 16px */
--font-size-2xl: 1.5rem; /* 24px при базовом размере 16px */
--font-size-3xl: 1.875rem; /* 30px при базовом размере 16px */
--font-size-4xl: 2.25rem; /* 36px при базовом размере 16px */
--font-size-5xl: 3rem; /* 48px при базовом размере 16px */
--font-size-6xl: 3.75rem; /* 60px при базовом размере 16px */
```

### Межстрочные интервалы

```css
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

### Веса шрифтов

```css
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

## Настройка

### Изменение базовых размеров

Чтобы изменить базовые размеры шрифтов, отредактируйте файл `src/shared/styles/_variables.scss`:

```scss
:root {
  --base-font-size-mobile: 12px; // Было 14px
  --base-font-size-tablet: 14px; // Было 16px
  --base-font-size-desktop: 16px; // Было 18px
  --base-font-size-large: 18px; // Было 20px
}
```

### Добавление новых размеров

Добавьте новые размеры в `src/shared/styles/_variables.scss`:

```scss
:root {
  --font-size-7xl: 4.5rem; /* 72px при базовом размере 16px */
  --font-size-8xl: 6rem; /* 96px при базовом размере 16px */
}
```

И создайте соответствующие утилитарные классы в `src/shared/styles/index.scss`:

```scss
.text-7xl {
  font-size: var(--font-size-7xl);
}
.text-8xl {
  font-size: var(--font-size-8xl);
}
```

## Преимущества

1. **Автоматическая адаптация** - шрифты автоматически масштабируются под разные устройства
2. **Консистентность** - единая система размеров по всему приложению
3. **Простота использования** - утилитарные классы и компоненты для быстрого применения
4. **Гибкость** - возможность настройки под нужды проекта
5. **Производительность** - минимальное количество CSS и JavaScript кода
6. **Типобезопасность** - полная поддержка TypeScript

## Примеры использования

### Создание адаптивного заголовка

```tsx
<Typography as="h1" size="h1" weight="bold" lineHeight="tight">
  Адаптивный заголовок
</Typography>
```

### Создание адаптивного текста с кастомными размерами

```scss
.custom-text {
  @include responsive-font-size(14px, 16px, 18px, 20px);
  font-weight: 500;
  line-height: 1.6;
}
```

### Использование в компонентах

```tsx
function Card({ title, content }) {
  return (
    <div className="card">
      <Typography as="h3" size="h4" weight="semibold" className="mb-4">
        {title}
      </Typography>
      <Typography size="body" lineHeight="relaxed">
        {content}
      </Typography>
    </div>
  );
}
```

## Заключение

Система динамической адаптации шрифтов по rem обеспечивает удобный и гибкий способ создания отзывчивых интерфейсов. Она интегрируется с существующей архитектурой проекта и предоставляет множество способов использования - от простых утилитарных классов до сложных SCSS миксинов.
