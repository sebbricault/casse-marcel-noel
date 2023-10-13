// assets/components/HomePage.tsx

import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./../css/HomePage.css";

const HomePage: React.FC = () => {
  const [lastVehiculeImage, setLastVehiculeImage] = useState<string>("");
  const [lastPieceImage, setLastPieceImage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Remplacez cette URL par l'URL de votre API pour récupérer le dernier véhicule ajouté
    const fetchPiece = async () => {
      try {
        const response = await fetch("piece/api/last-Piece", {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        if (!response.ok) {
          throw new Error("Erreur réseau lors de la récupération des pièces");
        }
        console.log;
        const data = await response.json();

        setLastPieceImage(data.imageName);
      } catch (error) {
        console.error("Erreur lors de la récupération des pièces", error);
        setError(error.message);
      }
    };

    console.log("piece", lastPieceImage);
    fetchPiece();

    const fetchVehicules = async () => {
      try {
        const response = await fetch("vehicule/api/last-vehicule", {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        if (!response.ok) {
          throw new Error(
            "Erreur réseau lors de la récupération des véhicules"
          );
        }
        console.log;
        const data = await response.json();

        setLastVehiculeImage(data.imageName);
      } catch (error) {
        console.error("Erreur lors de la récupération des véhicules", error);
        setError(error.message);
      }
    };

    fetchVehicules();
  }, []);

  return (
    <div className="container-fluid py-5 homepage-container">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom"></header>
      <main>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card custom-card">
              <img
                src={
                  lastVehiculeImage
                    ? `/images/vehicule/${lastVehiculeImage}`
                    : ""
                }
                alt="Véhicules"
                className="card-img-top"
              />
              <div className="card-body custom-card-body">
                <div className="d-flex align-items-center">
                  <i className="fas fa-car custom-icon"></i>
                  <h2 className="card-title">Gestion des véhicules</h2>
                </div>
                <p className="card-text">
                  Accédez à la liste complète des véhicules, ajoutez de nouveaux
                  véhicules, modifiez ou supprimez des entrées existantes.
                </p>
                <a href="/vehicule/" className="btn custom-btn">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card custom-card">
              <img
                src={lastPieceImage ? `/images/vehicule/${lastPieceImage}` : ""}
                alt="Piéce"
                width="55%"
              />
              <div className="card-body custom-card-body">
                <h2 className="card-title">
                  <i className="fas fa-cogs custom-icon"></i>Gestion des pièces
                </h2>
                <p className="card-text">
                  Accédez à la liste complète des pièces, ajoutez de nouvelles
                  pièces, modifiez ou supprimez des entrées existantes.
                </p>
                <a href="/piece" className="btn custom-btn">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <div className="card custom-card">
              <img src="" alt="Transactions" className="card-img-top" />
              <div className="card-body custom-card-body">
                <h2 className="card-title">
                  <i className="fas fa-history custom-icon"></i>Historique des
                  transactions
                </h2>
                <p className="card-text">
                  Consultez l'historique complet des transactions, y compris les
                  ventes, les achats et les retours.
                </p>
                <a href="/historique-transactions" className="btn custom-btn">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card custom-card">
              <img
                src="/path/to/documents-image.jpg"
                alt="Documents"
                className="card-img-top"
              />
              <div className="card-body custom-card-body">
                <h2 className="card-title">
                  <i className="fas fa-file-alt custom-icon"></i>Génération de
                  documents
                </h2>
                <p className="card-text">
                  Générez des factures, des reçus et d'autres documents
                  importants en fonction des transactions effectuées.
                </p>
                <a href="/generation-documents" className="btn custom-btn">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
