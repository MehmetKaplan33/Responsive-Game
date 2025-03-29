# Responsive Game Development Course Homepage

A fully responsive landing page for a game development course platform, built with HTML, SASS/CSS, and JavaScript.

![Project Preview](img/hero-image%201.png)

## Features

- 📱 Fully responsive design that works on all devices
- 🎨 Modern and clean UI design
- 🔄 Smooth scrolling navigation
- 💅 Built with SASS for maintainable styling
- 🎯 Optimized for performance
- 📧 Newsletter subscription form
- 📱 Mobile-friendly navigation menu

## Technologies Used

- HTML5
- SASS/CSS
- JavaScript
- Font Awesome Icons
- Google Fonts (Poppins, Raleway)

## Project Structure

```
Responsive-Homepage/
│
├── css/
│   └── style.css
│
├── sass/
│   └── input.scss
│
├── js/
│   └── script.js
│
├── img/
│   └── [image assets]
│
└── index.html
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/MehmetKaplan33/Responsive-Homepage.git
```

2. Open the project folder:
```bash
cd Responsive-Homepage
```

3. If you want to modify the SASS:
   - Install SASS if you haven't already:
   ```bash
   npm install -g sass
   ```
   - Watch for SASS changes:
   ```bash
   sass --watch sass/input.scss:css/style.css
   ```

4. Open `index.html` in your browser or use a live server.

## Key Components

- **Header Section**: Features a responsive navigation bar and hero section with course introduction
- **Testimonials Section**: Displays student testimonials with a unique design
- **Courses Section**: Showcases available courses with course duration
- **App Section**: Promotes mobile app with download options
- **Footer Section**: Contains quick links, course information, and newsletter subscription

## Responsive Breakpoints

- Mobile: < 576px
- Tablet: < 768px
- Laptop: < 992px
- Desktop: < 1200px

## Customization

The project uses SASS variables for easy customization:

- Colors can be modified in `sass/input.scss`
- Breakpoints can be adjusted in the `$breakpoints` map
- Font sizes can be changed through the size variables

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Mehmet Kaplan - [GitHub Profile](https://github.com/yourusername)

## Acknowledgments

- Design inspiration from modern educational platforms
- Icons provided by Font Awesome
- Fonts from Google Fonts
