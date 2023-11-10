const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_k17kmvj';
   const templateID = 'template_zdupfki';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Envoi en cours...';
        Toastify({
          text: "Votre commande a été prise avec succès",
          duration: 30000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
          },
          onClick: function(){} // Callback after click
        }).showToast();
        form.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});