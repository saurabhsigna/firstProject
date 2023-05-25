export async function fetchUserInfo(token) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URI + "/api/users/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
