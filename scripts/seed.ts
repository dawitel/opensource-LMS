const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Theoritical Computer Science" },
                { name: "Mathematics for CS" },
                { name: "Data science" },
                { name: "Artificial intellegience" },
                { name: "Systems design" },
                { name: "Programming" },
                { name: "Business" },
            ]
        });

        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }

}
main();