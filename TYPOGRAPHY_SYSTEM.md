# Система адаптивных шрифтов

## Обзор

Реализована глобальная система динамической адаптации шрифтов по rem на уровне всего проекта. Система автоматически масштабирует размеры шрифтов в зависимости от размера экрана, обеспечивая оптимальную читаемость на всех устройствах.

## Основные компоненты

### 1. CSS переменные для размеров шрифтов

В `app/globals.scss` определены CSS переменные:

```scss
/* Динамические размеры шрифтов (в rem) */
--font-size-xs: 0.75rem; /* 12px при базовом 16px */
--font-size-sm: 0.875rem; /* 14px при базовом 16px */
--font-size-base: 1rem; /* 16px при базовом 16px */
--font-size-lg: 1.125rem; /* 18px при базовом 16px */
--font-size-xl: 1.25rem; /* 20px при базовом 16px */
--font-size-2xl: 1.5rem; /* 24px при базовом 16px */
--font-size-3xl: 1.875rem; /* 30px при базовом 16px */
--font-size-4xl: 2.25rem; /* 36px при базовом 16px */
--font-size-5xl: 3rem; /* 48px при базовом 16px */
--font-size-6xl: 3.75rem; /* 60px при базовом 16px */
```

### 2. Адаптивные breakpoints

Система автоматически изменяет базовый размер шрифта:

- **Мобильные (до 640px)**: 14px
- **Планшеты (640px - 1023px)**: 15px
- **Десктопы (1024px - 1279px)**: 16px
- **Большие экраны (1280px - 1535px)**: 17px
- **Очень большие экраны (1536px+)**: 18px

### 3. Tailwind CSS интеграция

В `tailwind.config.ts` добавлена поддержка новых размеров:

```typescript
fontSize: {
  'xs': 'var(--font-size-xs)',
  'sm': 'var(--font-size-sm)',
  'base': 'var(--font-size-base)',
  // ... и т.д.
}
```

## Использование

### 1. Через CSS переменные

```scss
.my-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
```

### 2. Через Tailwind классы

```jsx
<h1 className="text-4xl font-bold leading-tight">Заголовок</h1>
```

### 3. Через Typography компонент

```jsx
import { Typography } from "@/shared/ui";

<Typography
  variant="h1"
  size="4xl"
  weight="bold"
  color="primary"
  align="center"
>
  Адаптивный заголовок
</Typography>;
```

### 4. Через SCSS миксины

```scss
@import "@/shared/styles/_responsive_mixins.scss";

.my-heading {
  @include heading(1); // H1 стили
}

.my-text {
  @include text-body; // Основной текст
}

.my-button {
  @include button-text; // Текст кнопки
}
```

## Компонент Typography

### Props

```typescript
interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "small";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "light" | "normal" | "bold" | "extrabold" | "black";
  color?: "primary" | "secondary" | "tertiary" | "white";
  align?: "left" | "center" | "right" | "justify";
  lineHeight?: "tight" | "snug" | "normal" | "relaxed" | "loose";
  letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
  children: React.ReactNode;
}
```

### Примеры использования

```jsx
// Заголовок
<Typography variant="h1" color="primary">
  Главный заголовок
</Typography>

// Адаптивный размер
<Typography size="2xl" weight="bold">
  Большой текст
</Typography>

// Кастомный элемент
<Typography as="span" variant="caption" color="secondary">
  Подпись
</Typography>
```

## SCSS миксины

### Основные миксины

```scss
// Адаптивный размер шрифта
@include responsive-font-size(14px, 16px, 18px, 20px);

// Адаптивная высота строки
@include responsive-line-height(1.2, 1.4, 1.6, 1.8);

// Типографические стили
@include typography(lg, bold, normal, wide);

// Готовые стили
@include heading(1); // H1
@include text-body; // Основной текст
@include text-caption; // Подпись
@include button-text; // Текст кнопки
@include nav-text; // Навигация
```

## Тестирование

Для тестирования системы адаптивных шрифтов:

1. Откройте любую страницу приложения
2. Изменяйте размер окна браузера
3. Наблюдайте, как размеры шрифтов автоматически адаптируются под размер экрана
4. Используйте инструменты разработчика для проверки CSS переменных

## Преимущества

1. **Автоматическая адаптивность** - размеры шрифтов автоматически масштабируются
2. **Консистентность** - единая система размеров по всему проекту
3. **Производительность** - использование CSS переменных и rem единиц
4. **Гибкость** - множество вариантов настройки через props и миксины
5. **Типобезопасность** - TypeScript типы для всех параметров
6. **Плавные переходы** - анимация при изменении размера экрана

## Миграция существующего кода

### Было:

```scss
.title {
  font-size: 28px;
  line-height: 120%;
}
```

### Стало:

```scss
.title {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
}
```

Или через Tailwind:

```jsx
<h1 className="text-4xl leading-tight">Заголовок</h1>
```

## Рекомендации

1. Используйте CSS переменные вместо жестко заданных пикселей
2. Применяйте Typography компонент для консистентности
3. Используйте SCSS миксины для сложных типографических стилей
4. Тестируйте на разных размерах экрана
5. Следуйте принципу прогрессивного улучшения
