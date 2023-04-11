const d = document,
  card = new Cleave(".numero-tarjeta", {
    creditCard: true,
  }),
  $formNombre = d.getElementById("nombre"),
  $formTarjeta = d.querySelector(".numero-tarjeta"),
  $formMonth = d.querySelector(".month"),
  $formYear = d.querySelector(".year"),
  $formCVC = d.querySelector(".cvc"),
  $tarjetaNombre = d.querySelector(".tarjeta-nombre"),
  $tarjetaNumero = d.querySelector(".tarjeta-numero"),
  $tarjetaMonth = d.querySelector(".tarjeta-month"),
  $tarjetaYear = d.querySelector(".tarjeta-year"),
  $tarjetaCVC = d.querySelector(".tarjeta-cvc"),
  $form = d.querySelector(".formulario-tarjetas"),
  $thanks = d.querySelector(".thanks-contenedor"),
  $boton = d.getElementById("button-continue");

$form.addEventListener("change", (e) => {
  if (e.target.matches(`.formulario-tarjetas [pattern]`)) {
    const $input = e.target,
      pattern = new RegExp($input.pattern);

    if (!pattern.test($input.value)) {
      $input.classList.add("invalid");
    } else {
      $input.classList.remove("invalid");
    }
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  $tarjetaNombre.textContent = $formNombre.value;
  $tarjetaNumero.textContent = $formTarjeta.value;
  $tarjetaMonth.textContent = $formMonth.value;
  $tarjetaYear.textContent = $formYear.value;
  $tarjetaCVC.textContent = $formCVC.value;
  $form.classList.add("disabled");
  $thanks.style.display = "flex";
});

$boton.addEventListener("click", () => {
  location.reload();
});
