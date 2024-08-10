document.querySelectorAll('.btn_plano_assinatura').forEach(iten => {
    iten.addEventListener('click', (event) => {
        const assinatura = event.currentTarget
        alert(assinatura.value)
    })
})