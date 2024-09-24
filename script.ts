interface Pet {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  status: string;
  photoUrls: string[];
  tags: {
    id: number;
    name: string;
  }[];
}

const url =
  "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available";

// Вариант 1

async function fetchAsyncPets(): Promise<void> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data: Pet[] = await response.json();

    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Ошибка при запросе - ${error.message}`);
    }
  }
}

fetchAsyncPets();

// Варинат 2

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    return response.json();
  })
  .then((data: Pet[]) => console.log(data))
  .catch((error) => {
    console.log(`Ошика при запросе - ${error}`);
  });

// axios

// import axios from "axios";

// axios
//   .get<Pet[]>(url)
//   .then((response) => {
//     const pets = response.data;
//     console.log(pets);
//   })
//   .catch((error) => {
//     console.log(`Ошибка при запросе - ${error}`);
//   });

// Мне больше нравится аксиос. Задание было на ts, поэтому оставил в комментарии.
