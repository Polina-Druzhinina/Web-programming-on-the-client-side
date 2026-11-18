const settings = {
    fioAlign: 'center', fioSize: 26, fioColor: '#202020',
    posAlign: 'center', posSize: 16, posColor: '#202020'
};

document.querySelectorAll('.tool-group').forEach(group => {
    group.addEventListener('click', e => {
        const btn = e.target.closest('.t-btn');
        if (!btn) return;
        group.querySelectorAll('.t-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const id = group.id;
        const val = btn.dataset.val;
        if (id.includes('align')) settings[id.replace('-align', '') + 'Align'] = val;
        else settings[id.replace('-size', '') + 'Size'] = +val;
    });
});

document.querySelectorAll('.color-palette').forEach(palette => {
    palette.addEventListener('click', e => {
        const dot = e.target.closest('.color-dot');
        if (!dot) return;
        palette.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        settings[palette.id.replace('-color', '') + 'Color'] = dot.dataset.color;
    });
});

const phonesContainer = document.getElementById('phones-container');
document.getElementById('add-phone').addEventListener('click', () => {
    const row = document.createElement('div');
    row.className = 'phone-row';
    row.innerHTML = '<input type="text" class="phone-input" value="">' +
                    '<button class="del-btn" type="button">−</button>';
    row.querySelector('.del-btn').addEventListener('click', () => { row.remove(); refreshDel(); });
    phonesContainer.appendChild(row);
    refreshDel();
});

function refreshDel() {
    const rows = phonesContainer.querySelectorAll('.phone-row');
    rows.forEach(r => r.querySelector('.del-btn').hidden = rows.length <= 1);
}

function updateCard() {
    const $ = id => document.getElementById(id);

    $('out-org').textContent = $('in-org').value;

    const fio = $('out-fio');
    fio.textContent = $('in-fio').value;
    fio.style.textAlign = settings.fioAlign;
    fio.style.fontSize = settings.fioSize + 'px';
    fio.style.lineHeight = (settings.fioSize * 1.2) + 'px';
    fio.style.color = settings.fioColor;

    const pos = $('out-pos');
    pos.textContent = $('in-pos').value;
    pos.style.textAlign = settings.posAlign;
    pos.style.fontSize = settings.posSize + 'px';
    pos.style.lineHeight = (settings.posSize * 1.2) + 'px';
    pos.style.color = settings.posColor;

    const outPhones = $('out-phones-container');
    outPhones.innerHTML = '';
    document.querySelectorAll('.phone-input').forEach(inp => {
        if (inp.value.trim() !== '') {
            const p = document.createElement('p');
            p.className = 'card-phone';
            p.textContent = inp.value.trim();
            outPhones.appendChild(p);
        }
    });

    const showEmail = $('chk-email').checked;
    $('out-email').textContent = showEmail ? $('in-email').value : '';
    $('out-email').style.display = showEmail ? 'block' : 'none';

    const showAddress = $('chk-address').checked;
    $('out-address').textContent = showAddress ? $('in-address').value : '';
    $('out-address').style.display = showAddress ? 'block' : 'none';
}