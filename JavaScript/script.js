function toggleMenu() {
    const nav = document.querySelector('.nav-bar');
    nav.classList.toggle('show');
  }


    
    const text = `"I am Sean Lapaz, a dedicated IT student with a passion for building meaningful and innovative digital solutions. I believe that every line of code has the power to solve real-world problems, connect communities, and create lasting impact. My journey in tech is fueled by curiosity, creativity, and a constant drive to learn and grow. Whether it's designing a user-friendly interface or crafting a solid backend system, I aim to deliver excellence and inspire others to explore the beauty of technology."`;

    const element = document.getElementById('typedText');
    let index = 0;

    function typeChar() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeChar, 40); 
      }
    }

    typeChar();