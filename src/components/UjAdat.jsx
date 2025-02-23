import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UjAdat = () => {
  const [evszam, setEvszam] = useState(new Date().getFullYear());
  const [magyar, setMagyar] = useState('');
  const [nemet, setNemet] = useState('');
  const [szlovak, setSzlovak] = useState('');
  const [egyeb, setEgyeb] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      isNaN(magyar) ||
      isNaN(nemet) ||
      isNaN(szlovak) ||
      isNaN(egyeb) ||
      magyar < 0 ||
      nemet < 0 ||
      szlovak < 0 ||
      egyeb < 0
    ) {
      setError('Kérlek, érvényes, nem negatív számokat adj meg!');
      return;
    }

    const data = {
      ev: parseInt(evszam),
      magyar: parseInt(magyar),
      nemet: parseInt(nemet),
      szlovak: parseInt(szlovak),
      egyeb: parseInt(egyeb)
    };

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/lakosok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP hiba! (${response.status})`);
      }

      navigate('/adatok');
    } catch (err) {
      console.error('Hiba történt az adatok mentésekor:', err);
      setError(`Hiba történt az adatok mentésekor: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-4">
        <h2 className="adatok-title">Új Felmérés Felvétele</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="evszam" className="form-label">
            Évszám
          </label>
          <input
            type="number"
            id="evszam"
            className="form-control"
            value={evszam}
            onChange={(e) => setEvszam(e.target.value)}
            required
          />
        </div>

        {['Magyar', 'Német', 'Szlovák', 'Egyéb'].map((label, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={label.toLowerCase()} className="form-label">
              {label}
            </label>
            <input
              type="number"
              id={label.toLowerCase()}
              className="form-control"
              value={
                label === 'Magyar'
                  ? magyar
                  : label === 'Német'
                  ? nemet
                  : label === 'Szlovák'
                  ? szlovak
                  : egyeb
              }
              onChange={(e) => {
                if (label === 'Magyar') setMagyar(e.target.value);
                else if (label === 'Német') setNemet(e.target.value);
                else if (label === 'Szlovák') setSzlovak(e.target.value);
                else setEgyeb(e.target.value);
              }}
              required
              min="0"
            />
          </div>
        ))}

        <button type="submit" className="btn btn-success" disabled={isLoading}>
          {isLoading ? 'Küldés...' : 'Felmérés hozzáadása'}
        </button>
      </form>
    </div>
  );
};

export default UjAdat;
