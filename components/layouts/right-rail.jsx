import './default.scss';

const RightRailLayout = (props) => {

  const [header, main, rightRail, footer] = props.children;

  return (
    <div>
      <header>{header}</header>
      <main>{main}</main>
      <section>{rightRail}</section>
      <footer>{footer}</footer>
    </div>
  );
};

RightRailLayout.sections = ['header', 'main', 'rightRail', 'footer'];

export default RightRailLayout;
