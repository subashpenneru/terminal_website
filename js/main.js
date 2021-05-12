const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

var aboutId, contactId;

about.addEventListener('click', () => {
  if (aboutId && document.querySelector(`#${aboutId}`)) {
  } else {
    const box = new WinBox({
      title: 'About Me',
      width: '400px',
      height: '400px',
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground('#00aa00');
      },
      onblur: function () {
        this.setBackground('#777');
      },
    });

    aboutId = box.id;
  }
});

contact.addEventListener('click', () => {
  if (contactId && document.querySelector(`#${contactId}`)) {
  } else {
    const box = new WinBox({
      title: 'Contact Me',
      width: '400px',
      height: '400px',
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: contactContent,
      onfocus: function () {
        this.setBackground('#00aa00');
      },
      onblur: function () {
        this.setBackground('#777');
      },
    });

    contactId = box.id;
  }
});
