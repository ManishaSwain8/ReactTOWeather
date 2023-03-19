export const CurrentWeather = () => {
  return (
    <div className="font-mono  ">
      <div className="w-80 h-80 bg-slate-900 shadow-2xl rounded-xl flex p-3 text-white">
        <div>
          <p className="text-bold text-xl">Belgrade</p>
          <p className="text-sm">Rainy</p>
          <div>
            <p className="font-bold  text-blue-500 text-6xl mt-8">18°C</p>

            <div className="justify-center mt-6">
              <div>
                <span>Feels like</span>
                <span> 22°C</span>
              </div>
              <div>
                <span>Wind</span>
                <span> 2 m/s</span>
              </div>
              <div>
                <span>Humidity</span>
                <span> 15%</span>
              </div>
              <div>
                <span>Pressure</span>
                <span> 15hPa</span>
              </div>
            </div>
          </div>
        </div>
        <img className="w-20 h-20 ml-8" src="icons/rain.png"></img>
      </div>
    </div>
  );
};
