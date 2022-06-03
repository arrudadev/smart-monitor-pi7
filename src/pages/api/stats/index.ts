import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handleGetStats(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const stats = await prisma.stats.findMany();

  return response.status(200).json({
    data: stats,
  });
}

async function handleCreateStats(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { heart_beats, spo2, body_temperature, env_temperature, env_humidity } =
    request.body;

  const stats = await prisma.stats.create({
    data: {
      heart_beats,
      spo2,
      body_temperature,
      env_temperature,
      env_humidity,
    },
  });

  return response.status(201).json({
    data: stats,
  });
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  if (method === 'GET') {
    return await handleGetStats(request, response);
  }

  if (method === 'POST') {
    return await handleCreateStats(request, response);
  }

  return response.status(404).json({ message: 'Route no found.' });
}
