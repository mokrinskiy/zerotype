import { faker } from "@faker-js/faker/locale/es";

export const generateWords = (count: number) => {
    return faker.lorem.words(count).toLowerCase();
};
