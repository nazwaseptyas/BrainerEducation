function handleGetFormData() {
    const nameInput = document.getElementById("name").value;
    const cityInput = document.getElementById("city").value;
    const emailInput = document.getElementById("email").value;
    const zipCodeInput = document.getElementById("zip-code").value;
    const statusInput = document.getElementById("status").checked;

    // Mengembalikan sebuah objek dengan properti yang telah disebutkan
    return {
        name: nameInput,
        email: emailInput,
        city: cityInput,
        zipCode: zipCodeInput,
        status: statusInput,
    };
}

// Fungsi untuk memeriksa apakah suatu string hanya terdiri dari angka
function isNumber(str) {
    // Loop melalui setiap karakter dalam string
    for (let i = 0; i < str.length; i++) {
        // Gunakan isNaN() untuk mengecek apakah karakter bukan angka
        if (isNaN(str.charAt(i))) {
            return false; // Jika karakter bukan angka, kembalikan false
        }
    }
    return true; // Jika semua karakter adalah angka, kembalikan true
}

function checkboxIsChecked() {
    const checkbox = document.getElementById('status');
    return checkbox.checked;
}


function validateFormData(formData) {
    if (
        formData && !isNaN(formData.zipCode) &&
        checkboxIsChecked(formData.status)
    ) {
        return true;
    } else {
        return false;
    }
}

function submit(e) {
    // e.preventDefault(); // Mencegah form untuk melakukan refresh halaman
    const formData = handleGetFormData();
    if (validateFormData(formData)) {

        document.getElementById('warning').innerHTML = '';

        console.log('data berhasil ditambah');
    } else {

        document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
    }
}

document.getElementById('form').addEventListener('submit', submit);