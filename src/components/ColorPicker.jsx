import { useState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');
    const [showAlert, setShowAlert] = useState(false);

    function getLuminance(hex) {
        const rgb = hex
          .slice(1)
          .match(/.{2}/g)
          .map(x => parseInt(x, 16) / 255)
          .map(x => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)));
        return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
      }
      
      function isDark(hex) {
        return getLuminance(hex) < 0.5;
      }

    const copyColor = () => {
        navigator.clipboard.writeText(`${color}`).then(() => {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
        }).catch((err) => {
            alert('Error al copiar: ' + err);
        });
    };
      

    return(
        <div className='flex flex-col items-center mt-12'>
            <div className='w-[300px] h-[300px] relative flex flex-col justify-center items-center rounded-2xl' style={{ backgroundColor: color }}>
                <p
                    onClick={copyColor}
                    className={isDark(color) ? 'text-white' : 'text-black cursor-pointer'}
                >
                    Color: {color}
                </p>

                {showAlert && (
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 bg-green-500 text-white w-[250px] rounded-lg shadow-lg text-center"
                    >
                        ¡Texto copiado al portapapeles!
                    </div>
                )}
            </div>
            <div className='flex justify-center items-center gap-2 mt-3'>
                <label>Selecciona un color:</label>
                <input className='w-30 '
                type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
        </div>
    )
}