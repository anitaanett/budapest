import React, { useEffect, useState } from 'react';

const Adatok = () => {
  const [adatok, setAdatok] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/lakosok');
        if (!response.ok) {
          throw new Error(`HTTP hiba! (${response.status})`);
        }
        const data = await response.json();

        const rendezettAdatok = data.sort((a, b) => b.ev - a.ev);
        setAdatok(rendezettAdatok);
      } catch (err) {
        console.error('Hiba történt az adatok lekérésekor:', err);
        setError(`Hiba: ${err.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='adatok-container'>
      <div className="container mt-4">
        <h2 className="adatok-title">Népszámlálási Adatok</h2>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <section>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Évszám</th>
                  <th>Magyar</th>
                  <th>Német</th>
                  <th>Szlovák</th>
                  <th>Egyéb</th>
                </tr>
              </thead>
              <tbody>
                {adatok.map((sor) => (
                  <tr key={sor.id}>
                    <td>{sor.ev}</td>
                    <td>{sor.magyar}</td>
                    <td>{sor.nemet}</td>
                    <td>{sor.szlovak}</td>
                    <td>{sor.egyeb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  );
};

export default Adatok;
