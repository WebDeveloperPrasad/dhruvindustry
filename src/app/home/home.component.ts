import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products = [
    {
      name: 'HDPE Tarpaulin Cover',
      image: 'assets/products/HDPETarpaulinCover.jpeg',
      description: 'High density polyethylene (HDPE) tarpaulin is excellent for covering product protecting them from rain, moisture and dust.'
    },
    {
      name: 'Canvas Cover',
      image: 'assets/products/CanvasCover.jpeg',
      description: 'Canvas cover is 100% waterproof for protecting product from rain, dust.'
    },
    {
      name: 'Silpaulin Cover',
      image: 'assets/products/SilpaulinCover.jpeg',
      description: 'Silpaulin is Light Weight Tarpaulin. Features: Light Weight yet tough. Its lamination process makes it that much more stronger without adding too much to its weight'
    },
    {
      name: 'VCI Anti Rust Products',
      image: 'assets/products/VCIAntiRustProducts.jpeg',
      description: 'It is advisable to use such VCI (Volatile Corrosion Inhibitor) packing material to use protect both ferrous and non ferrous metal surface. It is providing reliable protection against corrosion for metal components. It is reliable corrosion free and long term protection for wide range of your product. VCI product protection duration 12 to 16 month depending on how tightly sealed (leak-proof) the packing. VCI product is cost saving. It is no environmental and safety hazards.'
    },
    {
      name: 'HDPE Tarpaulin',
      image: 'assets/products/HDPETarpaulin.jpeg',
      description: 'High density polyethylene (HDPE) tarpaulin is a product with multiple end uses.'
    },
    {
      name: 'Ratchet Lashing System And Lashing Belt',
      image: 'assets/products/RatchetLashingSystemAndLashingBelt.jpeg',
      description: 'The Ratchet Lashing system is used for securing cargo while transporting, shifting or storage. It is a modern, light weight and thoroughly reliable method of securing all types of load across an entire spectrum of requirements. It offers significant advantages over any other securing system.'
    },
    {
      name: 'Wire Buckle / H Buckle',
      image: 'assets/products/WireBuckleHBuckle.jpeg',
      description: 'Wire buckles are a handy accessory when poly strapping is being used to secure a pallet for shipping. While wire buckles are fairly simple and straightforward to use, it is worth taking a moment to understand how they work before you get started.'
    },
    {
      name: 'Dunnage Bag (Craft Paper and Woven PP)',
      image: 'assets/products/DunnageBag.jpeg',
      description: 'Dunnage air bags fill voids, brace loads, absorb vibrations, and protect cargo from in transit damage that can be caused by longitudinal, athwartship or bouncy vertical movements. They have an outstanding load stabilizing capacity, withstanding tons of pressure and resistance to load shifting.'
    },
    {
      name: 'Composite Strap / Cord Strap',
      image: 'assets/products/CompositeStrapCordStrap.jpeg',
      description: 'Composite strapping is commonly used for goods that may expand, settle, or contract during transportation. Specially made for usage on rough environmental materials and sharp edges, the Polyester Composite Strap is optimised to secure the cargo.'
    },
    {
      name: 'Aluminium Foil Cover',
      image: 'assets/products/AluminiumFoilCover.jpeg',
      description: 'Aluminum foil cover is ideal safe packing to protection of product. It is work on principle of climatic packing. Aluminum foil stand hot and cold climate at any temperature. It is suitable for seaworthy packing for long term protection of product.'
    },
    {
      name: 'Shrink Wrap',
      image: 'assets/products/ShrinkWrap.jpeg',
      description: 'Shrink Wrap Complete protection against weather damage.'
    },
    {
      name: 'Stretch Flim for Wrapping',
      image: 'assets/products/StretchFlimforWrapping.jpeg',
      description: 'Stretch film is highly stretchable plastic flim that is wrapped around product. It keeps important roll to tightly bound product. Its protect rain, dust and moisture. Stretch film commonly use wrap product on pallets and secure each other. It help us to reduce loss product, discourage loading and reduce work injury. It is increased clarity allows user to see product.'
    },
  ];
}
