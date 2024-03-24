# Product Widgets

1. [Getting Started](#getting-started)
2. [Description](#description)
3. [Demo](#demo)
4. [Stack](#stack)
5. [Types](#types)
6. [Atomic approach](#atomic-approach)
7. [Testing](#testing)
8. [Storybook](#storybook)
9. [Accessibility](#accessibility)
10. [Responsiveness](#responsiveness)

## Getting Started

First, install node modules:

```bash
npm install
```

Add `.env` file to the root of the project and declare `FETCH_WIDGETS_URL` (the endpoint provided in the task), 

Then, run the development server:

```bash
npm run dev
```

Node.js 18.17.0 or later required.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

Product widgets display, the user can select the colour of the widget, link it to a public profile or activate it. Just one widget can be active at a time so if the user activates a widget, the other active widget gets deactivated.

If the user hovers the "i" icon a tooltip gets rendered.

## Demo

![Mar-24-2024 12-35-01](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/fbca8b8d-5ff8-419e-b198-91b1ce867006)

## Stack

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
  <li>Storybook</li>
</ul>

## Types

All types and enums have been declared in a `Types/types.ts`

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Testing

Jest and React Testing Library have been used for testing. Testing has been added for some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`

## Storybook

Storybook added for creating and testing Atom components in isolation.

For running sotyrbook: `npm run storybook`

![Screenshot 2024-03-24 at 12 26 38](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/5e1c1f26-3151-468c-ba4b-41e0b51f8306)


## Accessibility

Native HTML tags with WAI-ARIA Roles have been used for accessibility which would allow screen readers to navigate through the page.

An 92 overall score achieved in Lighthouse tool

![Screenshot 2024-03-23 at 21 23 22](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/1bb95e4a-e97b-4bf5-858a-68eb1d578c49)

## Responsiveness

The app is responsive and adjusts to desktop, tablet and mobile viewports, media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

![Screenshot 2024-03-23 at 21 52 02](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/3d45bff7-dc8d-4381-ab6f-f1ae3375baf0)

### Tablet

![Screenshot 2024-03-23 at 21 52 37](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/ff1b5cfd-b666-4ae0-870a-489e05605e22)

![Screenshot 2024-03-23 at 21 52 55](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/c8e40fde-461a-46f3-ad31-7c55fc7e3149)

### Desktop

![Screenshot 2024-03-23 at 21 51 37](https://github.com/david-lorenzo-vargas/Product-Widgets/assets/72414745/668ab4bc-63ee-4baf-b19d-2b17111012f4)
