# Product Widgets

1. [Getting Started](#getting-started)
2. [Description](#description)
3. [Demo](#demo)
4. [Stack](#stack)
5. [Types](#types)
6. [Atomic approach](#atomic-approach)
7. [Testing](#testing)
8. [Accessibility](#accessibility)
9. [Responsiveness](#responsiveness)

## Getting Started

First, install node modules:

```bash
npm install
```

Add `.env` file to the root of the project and declare `FETCH_WIDGETS_URL` (the url provided in the task), 

Then, run the development server:

```bash
npm run dev
```

Node.js 18.17.0 or later required.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

Product widgets display, the user can select the colour of the widget, link it to a public profile or activate it. Just one widget can be active at a time so if the user actiaves a widget, the other active widget gets deactivated.

If the user hovers the "i" icon a tooltip gets rendered.

## Demo

## Stack

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
</ul>

## Types

All types and enums have been declared in a `Types/types.ts`

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Testing

Jest and React Testing Library have been used for testing. Testing has been added for some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`

## Accessibility

Native HTML tags with WAI-ARIA Roles have been used for accessibility which would allow screen readers to navigate through the page.

An 92 overall score achieved in Lighthouse tool

## Responsiveness

The app is responsive and adjusts to desktop, tablet and mobile viewports, media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

### Tablet


### Desktop