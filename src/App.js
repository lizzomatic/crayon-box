import { useState } from 'react';
import colors from './colors.json';
import webColors from './webColors.json'
import crayonBox from './images/crayonBox.png'


function FilterableColorTable({ colors }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <h1>crayon box</h1>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText} />
      <ColorTable colors={colors}
        filterText={filterText} />
    </div>
  );
}

// function ColorCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">
//         {category}
//       </th>
//     </tr>
//   );
// }

function ColorRow({ color }) {
  const style = {
    color: 'red'
  };

  return (
    <tr key={color.hex} style={{
      backgroundColor: color.hex
    }}>
      <td>{color.name}</td>
      <td>{color.hex}</td>
      <td>{color.rgb}</td>
    </tr >
  )
}

function ColorTable({ colors, filterText }) {
  const rows = [];

  colors.forEach((color) => {
    if (
      color.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    rows.push(
      <ColorRow key={color.hex}
        color={color}
        hex={color.hex}
        rgb={color.rgb} />
    )
  });

  // //take in a color string return separate RGB values
  // //"(250, 23, 181)"
  // function ColorRGB(strColor) {
  //   let rgb = strColor.substring(1, strColor.length - 1)
  //   return rgb.split(', ')
  // }

  // function ColorDiff(color1, color2) {
  //   const [r1, g1, b1] = colorRGB(color1)
  //   const [r2, g2, b2] = colorRGB(color2)
  //   //macaroni and cheese
  //   let r1 = 255;
  //   let g1 = 189;
  //   let b1 = 136;
  //   //tomoato
  //   let r2 = 255;
  //   let g2 = 99;
  //   let b2 = 71;
  //   const diff = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
  //   console.log(diff)
  //   return diff;
  // }

  return (
    <table>
      <thead>
        <tr>
          <th>color</th>
          <th>hex</th>
          <th>rgb</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form>
      <input
        type="text" placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>
  );
}

export default function App() {
  return (
    <>
      <img style={{ width: '385px' }} src={crayonBox} alt="crayola crayon colors" />
      {/* <ColorDiff /> */}
      <FilterableColorTable colors={colors} />
    </>
  )

}
