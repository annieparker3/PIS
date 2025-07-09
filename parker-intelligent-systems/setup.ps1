# Install dependencies
npm install

# Install shadcn/ui
npx shadcn@latest init

# Install additional shadcn components
$components = @(
  "button",
  "card",
  "badge",
  "input",
  "label",
  "form",
  "textarea",
  "navigation-menu",
  "dropdown-menu",
  "dialog",
  "toast",
  "tabs"
)

foreach ($component in $components) {
  npx shadcn@latest add $component
}

# Install additional dependencies
npm install framer-motion lucide-react next-themes @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-next

Write-Host "Setup complete! Run 'npm run dev' to start the development server." -ForegroundColor Green
