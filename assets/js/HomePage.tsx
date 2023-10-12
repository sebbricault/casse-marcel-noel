// assets/components/HomePage.tsx

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid  py-5">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom"></header>
      <main>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="" alt="Véhicules" className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">
                  <i className="fas fa-car mr-2"></i>Gestion des véhicules
                </h2>
                <p className="card-text">
                  Accédez à la liste complète des véhicules, ajoutez de nouveaux
                  véhicules, modifiez ou supprimez des entrées existantes.
                </p>
                <a href="/gestion-vehicules" className="btn btn-primary">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="" alt="Pièces" className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">
                  <i className="fas fa-cogs mr-2"></i>Gestion des pièces
                </h2>
                <p className="card-text">
                  Accédez à la liste complète des pièces, ajoutez de nouvelles
                  pièces, modifiez ou supprimez des entrées existantes.
                </p>
                <a href="/gestion-pieces" className="btn btn-primary">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="" alt="Transactions" className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">
                  <i className="fas fa-history mr-2"></i>Historique des
                  transactions
                </h2>
                <p className="card-text">
                  Consultez l'historique complet des transactions, y compris les
                  ventes, les achats et les retours.
                </p>
                <a href="/historique-transactions" className="btn btn-primary">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src="/path/to/documents-image.jpg"
                alt="Documents"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  <i className="fas fa-file-alt mr-2"></i>Génération de
                  documents
                </h2>
                <p className="card-text">
                  Générez des factures, des reçus et d'autres documents
                  importants en fonction des transactions effectuées.
                </p>
                <a href="/generation-documents" className="btn btn-primary">
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
