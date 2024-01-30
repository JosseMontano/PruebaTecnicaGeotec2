export async function getBase64Image(url: string) {

  const response = await fetch(url);
  const blob = await response.blob();
  
  const base64 = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  return base64
}
