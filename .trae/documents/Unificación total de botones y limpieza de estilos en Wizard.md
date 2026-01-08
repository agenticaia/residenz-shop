Voy a unificar los botones restantes manteniendo el radio de **12px**.

**Pasos:**

1.  **Estandarizar componentes del Wizard**:
    *   Editaré los archivos del asistente (`WizardStep1Success`, `WizardStep2Logistics`, `WizardStep3Zones`, `WizardStep4Pets`, `WizardStep5Confirmation`).
    *   Eliminaré las clases `rounded-xl` explícitas de los componentes `Button` para que hereden automáticamente la variable global.
    *   Actualizaré los botones de selección manual (elementos `<button>` nativos) que tienen `rounded-lg` para que usen `rounded-[var(--button-radius)]`, asegurando que coincidan exactamente con los botones principales.

2.  **Confirmación Global**:
    *   Verificaré que la variable `--button-radius` en `index.css` siga en `12px`.

Esto eliminará las pequeñas inconsistencias (como botones de 8px vs 12px) dentro de los flujos secundarios.