export function logout(){

     // Remove tokens from localStorage or sessionStorage
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');

  // Optional: Clear other user-related information
  localStorage.removeItem('user');
  sessionStorage.removeItem('user');
}