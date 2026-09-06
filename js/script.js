document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Interacción en Detalle de Producto (producto.html) ---
  const qtyInput = document.getElementById('cantidad');
  const priceElem = document.getElementById('precio-unitario');
  const totalElem = document.getElementById('precio-total');
  
  if (qtyInput && priceElem && totalElem) {
    const unitPrice = parseFloat(priceElem.dataset.precio);
    qtyInput.addEventListener('input', () => {
      const cantidad = parseInt(qtyInput.value) || 1;
      const total = unitPrice * cantidad;
      totalElem.textContent = `$${total.toLocaleString()}`;
    });
  }

  // --- 2. Validación Formulario login
  const loginForm = document.getElementById('form-login');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const email = document.getElementById('email');
      const password = document.getElementById('password');
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Ingrese un correo electrónico válido.');
        valid = false;
      } else {
        hideError(email);
      }

      if (password.value.trim().length < 6) {
        showError(password, 'La contraseña debe tener al menos 6 caracteres.');
        valid = false;
      } else {
        hideError(password);
      }

      if (valid) {
        alert('Inicio de sesión exitoso.');
        loginForm.reset();
      }
    });
  }

  // --- 3. Validación Formulario Registro 
  const regForm = document.getElementById('form-registro');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nombre = document.getElementById('nombre');
      const apellido = document.getElementById('apellido');
      const email = document.getElementById('reg-email');
      const pass = document.getElementById('reg-pass');
      const confirmPass = document.getElementById('confirm-pass');

      const textRegex = /^[a-zA-Za-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!textRegex.test(nombre.value.trim())) {
        showError(nombre, 'El nombre solo debe contener letras.');
        valid = false;
      } else { hideError(nombre); }

      if (!textRegex.test(apellido.value.trim())) {
        showError(apellido, 'El apellido solo debe contener letras.');
        valid = false;
      } else { hideError(apellido); }

      if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Ingrese un correo válido.');
        valid = false;
      } else { hideError(email); }

      if (pass.value.length < 6) {
        showError(pass, 'Mínimo 6 caracteres.');
        valid = false;
      } else { hideError(pass); }

      if (pass.value !== confirmPass.value || confirmPass.value === '') {
        showError(confirmPass, 'Las contraseñas no coinciden.');
        valid = false;
      } else { hideError(confirmPass); }

      if (valid) {
        alert('Registro completado exitosamente.');
        regForm.reset();
      }
    });
  }

  // Helpers 
  function showError(input, message) {
    const parent = input.parentElement;
    const errorDisplay = parent.querySelector('.error-msg');
    errorDisplay.textContent = message;
    errorDisplay.style.display = 'block';
  }

  function hideError(input) {
    const parent = input.parentElement;
    const errorDisplay = parent.querySelector('.error-msg');
    errorDisplay.style.display = 'none';
  }
});