const React = require('react');
const { minify } = require('uglify-js');
const colors = require('./src/styles/colors');

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ScriptToBeInjected key="scriptToBeInjected" />);
};

function ScriptToBeInjected() {
  const functionString = String(function () {
    console.log('Script Injected.');
  });

  const minified = minify(functionString);

  if (minified.error) throw new Error(error);

  return (
    <script dangerouslySetInnerHTML={{ __html: `(${minified.code})()` }} />
  );
}
