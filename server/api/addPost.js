import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
	const body = await readBody(e);

	const response = await prisma.posts.create({
		data: {
			userId: body.userId,
			name: body.name,
			image: body.image,
			text: body.text,
			picture: body.picture,
		},
	});
	return response;
});
