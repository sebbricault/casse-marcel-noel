import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

interface Piece {
  id: number;
  imageName: string;
  nom: string;
  description: string;
  stock: number;
  prix: number;
}

const PiecePage: React.FC = () => {
  const [Pieces, setPieces] = useState<Piece[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPiece = async () => {
      try {
        const response = await fetch("/piece/api/piece", {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        if (!response.ok) {
          throw new Error(
            "Erreur réseau lors de la récupération des véhicules"
          );
        }

        const data = await response.json();
        setPieces(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des véhicules", error);
        setError(error.message);
      }
    };

    fetchPiece();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }
  return (
    <div style={{ padding: "20px" }}>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>nom</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>stock</TableCell>
              <TableCell>prix</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Pieces.map((piece) => (
              <TableRow key={piece.id}>
                <TableCell>
                  <img
                    src={`/images/vehicule/${piece.imageName}`}
                    alt="piece"
                    style={{ width: "50px" }}
                  />
                </TableCell>
                <TableCell>{piece.nom}</TableCell>
                <TableCell>{piece.description}</TableCell>
                <TableCell>{piece.stock}</TableCell>
                <TableCell>{piece.prix}€</TableCell>
                <TableCell>
                  <Button color="primary" href={`/piece/${piece.id}`}>
                    Voir
                  </Button>
                  <Button color="secondary" href={`/piece/${piece.id}/edit`}>
                    Éditer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        href={`/piece/new`}
      >
        Ajouter un nouveau véhicule
      </Button>
    </div>
  );
};

export default PiecePage;
