export async function fetchUserInfo(token) {
  const response = await fetch("https://usr6by-1337.csb.app/api/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}
