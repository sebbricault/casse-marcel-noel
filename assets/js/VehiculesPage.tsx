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

interface Vehicule {
  id: number;
  imageName: string;
  marque: string;
  annee: number;
  statut: string;
}

const VehiculePage: React.FC = () => {
  const [vehicules, setVehicules] = useState<Vehicule[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchVehicules = async () => {
      try {
        const response = await fetch("/vehicule/api/vehicules", {
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
        setVehicules(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des véhicules", error);
        setError(error.message);
      }
    };

    fetchVehicules();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Index des Véhicules
      </Typography>

      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Marque</TableCell>
              <TableCell>Année</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicules.map((vehicule) => (
              <TableRow key={vehicule.id}>
                <TableCell>{vehicule.id}</TableCell>
                <TableCell>
                  <img
                    src={`/images/vehicule/${vehicule.imageName}`}
                    alt="Véhicule"
                    style={{ width: "50px" }}
                  />
                </TableCell>
                <TableCell>{vehicule.marque}</TableCell>
                <TableCell>{vehicule.annee}</TableCell>
                <TableCell>{vehicule.statut}</TableCell>
                <TableCell>
                  <Button color="primary" href={`/vehicule/${vehicule.id}`}>
                    Voir
                  </Button>
                  <Button
                    color="secondary"
                    href={`/vehicule/${vehicule.id}/edit`}
                  >
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
        href={`/vehicule/new`}
      >
        Ajouter un nouveau véhicule
      </Button>
    </div>
  );
};

export default VehiculePage;
