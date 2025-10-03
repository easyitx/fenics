# Быстрый старт: Система динамической адаптации шрифтов по rem

## 🚀 Что это?

Система автоматически масштабирует шрифты в зависимости от размера экрана:

- **Мобильные** (до 768px): базовый размер 14px
- **Планшеты** (768px+): базовый размер 16px
- **Десктопы** (1024px+): базовый размер 18px
- **Большие экраны** (1920px+): базовый размер 20px

## ⚡ Быстрое использование

### 1. Утилитарные классы

```tsx
// Заголовки
<h1 className="text-h1 font-bold">Главный заголовок</h1>
<h2 className="text-h2 font-semibold">Подзаголовок</h2>

// Текст
<p className="text-body leading-relaxed">Основной текст</p>
<span className="text-small text-secondary">Мелкий текст</span>

// Кнопки
<button className="text-button font-medium">Кнопка</button>
```

### 2. Компонент Typography

```tsx
import { Typography } from "@/shared/ui/Typography";

// Простое использование
<Typography>Обычный текст</Typography>

// С настройками
<Typography
  as="h1"
  size="h1"
  weight="bold"
  lineHeight="tight"
>
  Заголовок
</Typography>

// Адаптивные размеры
<Typography size="body" weight="medium">
  Адаптивный текст
</Typography>
```

### 3. SCSS миксины

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

## 📱 Доступные размеры

### Заголовки

- `text-h1` - 32px → 40px → 48px → 56px
- `text-h2` - 28px → 32px → 36px → 42px
- `text-h3` - 24px → 28px → 32px → 36px
- `text-h4` - 20px → 24px → 28px → 32px
- `text-h5` - 18px → 20px → 24px → 28px
- `text-h6` - 16px → 18px → 20px → 24px

### Текстовые размеры

- `text-body` - 14px → 16px → 18px → 20px
- `text-small` - 12px → 14px → 16px → 18px
- `text-caption` - 10px → 12px → 14px → 16px

### Специальные размеры

- `text-button` - 14px → 16px → 18px → 20px
- `text-label` - 12px → 14px → 16px → 18px

## 🎨 Веса шрифтов

- `font-thin` (100)
- `font-extralight` (200)
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)
- `font-black` (900)

## 📏 Межстрочные интервалы

- `leading-none` (1)
- `leading-tight` (1.25)
- `leading-snug` (1.375)
- `leading-normal` (1.5)
- `leading-relaxed` (1.625)
- `leading-loose` (2)

## 🔧 Настройка

### Изменение базовых размеров

В файле `src/shared/styles/_variables.scss`:

```scss
:root {
  --base-font-size-mobile: 12px; // Было 14px
  --base-font-size-tablet: 14px; // Было 16px
  --base-font-size-desktop: 16px; // Было 18px
  --base-font-size-large: 18px; // Было 20px
}
```

### Добавление новых размеров

```scss
:root {
  --font-size-7xl: 4.5rem; /* 72px при базовом размере 16px */
}

.text-7xl {
  font-size: var(--font-size-7xl);
}
```

## 💡 Примеры

### Карточка с адаптивным текстом

```tsx
function Card({ title, description }) {
  return (
    <div className="p-6 bg-surface rounded-lg">
      <Typography as="h3" size="h4" weight="semibold" className="mb-3">
        {title}
      </Typography>
      <Typography size="body" lineHeight="relaxed" color="secondary">
        {description}
      </Typography>
    </div>
  );
}
```

### Адаптивная кнопка

```tsx
function Button({ children, variant = "primary" }) {
  return (
    <button
      className={`
      px-6 py-3 rounded-lg
      text-button font-medium
      bg-${variant}
      hover:opacity-90
      transition-opacity
    `}
    >
      {children}
    </button>
  );
}
```

## ✅ Готово!

Система полностью интегрирована и готова к использованию. Все шрифты будут автоматически адаптироваться под размер экрана!
