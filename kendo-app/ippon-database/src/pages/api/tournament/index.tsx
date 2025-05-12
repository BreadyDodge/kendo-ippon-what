import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";
import { tournamentTable } from "~/server/db/schema";

interface Tournament {
  id: string;
  name: string;
  year: number;
  rounds: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //getting tournaments
  if (req.method === "GET") {
    try {
      const tournament = await db.select().from(tournamentTable).limit(5);
      return res.status(200).json({ data: tournament });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: `Failed to get tournament. Error: ${String(err)}` });
    }
  }
  //posting new tournament
  if (req.method === "POST") {
    const { name, year, rounds } = req.body as {
      name: string;
      year: number;
      rounds: number;
    };
    const abbreviatedName = name
      .split(" ")
      .map((w) => w[0]?.toUpperCase() ?? "")
      .join("");
    const id = `${abbreviatedName}_${year}`;
    try {
      const createdTournament = (await db
        .insert(tournamentTable)
        .values({ id, name, year, rounds })
        .returning()) as Tournament[];
      return res.status(201).json({ data: createdTournament });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: `Failed to add tournament. Error: ${String(err)}` });
    }
  }
}
