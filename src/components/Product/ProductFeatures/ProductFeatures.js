import TextWithIcon from '../../Text/TextWithIcon';
import Lead from '../../Lead/Lead';

import pf from './productFeatures.module.scss';

const ProductFeatures = ({ features }) => {
  return (
    <div className={pf.features}>
      <Lead text="details" />
      <div className={pf.features__list}>
        {features && features.map(feature => <TextWithIcon text={feature.text} icon={`${feature.icon}`} />)}
      </div>
    </div>
  );
};

export default ProductFeatures;
