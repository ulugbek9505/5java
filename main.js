// Foydalanuvchidan ismni so'rash
const name = prompt("Ismingizni kiriting:");

// Foydalanuvchidan space IDni so'rash
const spaceId = prompt("Space IDni kiriting:");

// Foydalanuvchidan space parolni so'rash
const spacePassword = prompt("Space parolni kiriting:");

// Obyektni yaratish
const userInfo = {
    name: name,
    id: spaceId,
    password: spacePassword
};

console.log(userInfo);
