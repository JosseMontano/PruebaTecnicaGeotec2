type handleGetType<T> = Promise<{
  error: string;
  val: T;
  status: number;
}>;

export const getDataUtility = async <T>(url: string): handleGetType<T> => {
  try {
    //obtener datos
    const response = await fetch(url, {
      method: "GET",
    });
    //guardar el datos
    const res = await response.json();
    const status = response.status;
    return { error: "", val: res, status: status };
  } catch (error) {
    //guardar el posible error
    if (error instanceof Error) {
      const err = error.message;
      return { error: err, val: {} as T, status: 500 };
    }
  }
  return { error: "", val: {} as T, status: 500 };
};
