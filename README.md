# M31 Biomedical AI Website

Official website for M31 Biomedical AI - a non-profit research organization pioneering advancements in biomedical imaging through cutting-edge AI.

## 📋 About

M31 Biomedical AI combines scientific excellence with real-world impact to transform the future of medical imaging. Our expertise spans:

- Neurodegenerative disease research
- Custom AI model development
- Radiology workflow enhancement
- Medical image segmentation powered by cutting-edge foundation models

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM 7.4.1
- **UI Framework**: Bootstrap 5.3.3, React Bootstrap 2.10.5
- **Icons**: React Icons 5.5.0
- **Build Tool**: React Scripts 5.0.1
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm or yarn

### Setup

1. Clone the repository

```bash
git clone <repository-url>
cd m31-web
```

2. Install dependencies

```bash
npm install
```

## 🛠️ Development

### Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder, optimized for best performance.

## 📁 Project Structure

```
m31-web/
├── public/                    # Static assets
│   ├── index.html            # HTML template
│   ├── m31logolight.png      # Logo image
│   └── manifest.json         # PWA configuration
├── src/
│   ├── assets/               # Font assets
│   │   ├── Montserrat/       # Montserrat font
│   │   └── Satoshi_Complete/ # Satoshi font
│   ├── images/               # Image assets
│   ├── pages/                # Page components
│   │   ├── Home.js           # Homepage
│   │   ├── Products.js       # Products page
│   │   ├── Services.js       # Services page
│   │   ├── Resources.js      # Resources page
│   │   ├── Contact.js        # Contact page
│   │   ├── About.js          # About page
│   │   └── helpers/          # Helper components
│   │       ├── Article.js    # Article component
│   │       ├── AuthorList.js # Author list component
│   │       ├── Footer.js     # Footer component
│   │       ├── NewsletterForm.js # Newsletter form component
│   │       └── TeamSection.js    # Team section component
│   ├── App.js                # Main application component
│   ├── Navbar.js             # Navigation bar component
│   ├── index.js              # Application entry point
│   └── App.css               # Global styles
├── package.json              # Project configuration
└── README.md                 # Project documentation
```

## 🌐 Website Pages

- **Home**: Showcases M31's mission, services, and highlighted articles
- **Products**: Displays AI products and solutions
- **Services**: Details the services offered
  - Medical Image Segmentation
  - Foundation Model Deployment
  - Research Collaboration
- **Resources**: Published papers and research resources
- **Contact**: Contact information and form
- **About**: Team introduction and company information

## 🎨 Key Features

- **Responsive Design**: Adapts to various devices and screen sizes
- **Video Background**: Dynamic video background showcasing medical image segmentation
- **Interactive Service Display**: Click icons to view detailed service information
- **Article Showcase**: Highlights important academic papers published by the team
- **Team Introduction**: Features scientist team members and their achievements
- **Newsletter Subscription**: Users can subscribe to latest updates

## 🚢 Deployment

### Deploy to GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will automatically build the project and deploy to GitHub Pages.

### Manual Deployment

1. Build the project

```bash
npm run build
```

2. Deploy the contents of the `build` folder to your hosting server

## 🔧 Configuration

### Custom Fonts

The project uses custom fonts:

- Montserrat (Variable Font)
- Satoshi (Variable Font)

Font files are located in the `src/assets/` directory.

### Environment Variables

To configure environment variables, create a `.env` file in the project root directory.

## 📝 Development Guide

### Adding a New Page

1. Create a new page component in the `src/pages/` directory
2. Add route configuration in `src/App.js`

### Modifying Styles

- Global styles: Edit `src/App.css` or `src/index.css`
- Page-specific styles: Edit the corresponding page's CSS file (e.g., `Home.css`)

### Adding Images

Place image files in the `src/images/` directory, then import and use them in components.

## 🤝 Contributing

Pull requests and issue reports are welcome.

## 📄 License

This project is private.

## 📞 Contact

For any questions or suggestions, please contact us through the website's contact page.

---

**M31 Biomedical AI** - Pioneering advancements in biomedical imaging through cutting-edge AI.
