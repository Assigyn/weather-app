import {useEffect} from "react";

function SearchBar({setCity, tempFormat, setTempFormat}) {
 const radio = [
     {value: 'celsius', text: '°C'},
     {value: 'fahrenheit', text: '°F'},
 ];

  useEffect(() => {
      const radioActive = document.querySelector(`input[type="radio"][value="${tempFormat}"]`);

      document.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.checked = false;
          radio.closest('label').classList.remove('radio-active');
      });

      if (radioActive) {
          radioActive.checked = true;

          const label = radioActive.closest('label');

          if (label) {
              label.classList.add('radio-active');
          }
      }

  }, [tempFormat])

  function getCityValue(e) {
      const value = e.target.value;

      if (13 === e.keyCode && '' !== value) {
          return value;
      }

      return null;
  }

  return (
      <div id="search-bar" className="d-flex flex-row w-100 justify-content-between align-items-center" onKeyDown={(e) => {
          setCity(getCityValue(e));
      }}>
          <div>
              <input id="search" type="text" placeholder="Search city...."/>
          </div>
          <div id="radio-temperature">
              {radio.map((data, key) => {
                  return (
                      <label key={key} htmlFor={`radio-${data.value}`}>
                          {data.text}
                          <input key={key} type="radio" id={`radio-${data.value}`} value={data.value} onClick={() => {setTempFormat(data.value)}}/>
                      </label>
                  )
              })}
          </div>
      </div>
  )
}

export default SearchBar
