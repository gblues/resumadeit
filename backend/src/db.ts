import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

/**
 * Runs a block of code that needs a database connection. The connection resources are automatically
 * freed when this method completes.
 *
 * @param lambda an async callback that accepts a PrismaClient as a parameter and returns void
 */
export async function withConnection(lambda: (client: PrismaClient) => Promise<void>) {
    try {
        await lambda(client);
        await client.$disconnect();
    } catch (error) {
        console.error(error);
        await client.$disconnect();
        process.exit(1);
    }
}




