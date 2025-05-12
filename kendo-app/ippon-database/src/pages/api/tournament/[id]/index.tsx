import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";
import { tournamentTable } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "DELETE") {
    const id = req.query.id as string;
    try {
      const tournament = await db.query.tournamentTable.findFirst({
        where: eq(tournamentTable.id, id),
      });
      if (!tournament) {
        return res.status(404).json({ message: "No such tournament" });
      }
      await db.delete(tournamentTable).where(eq(tournamentTable.id, id));
      return res
        .status(200)
        .json({ message: `Succesfully deleted tournament with id: ${id}` });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: `Failed to delete tournament with id: ${id}` });
    }
  }
}
