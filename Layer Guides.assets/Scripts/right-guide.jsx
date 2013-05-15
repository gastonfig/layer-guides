//Select Active Layer
var docRef = app.activeDocument,
activeLayer = docRef.activeLayer;
activeLayerCoordinates = activeLayer.bounds;

function traceGuide(guide) {
	var orientation = '';

	if(guide === 0 || guide === 2) {
		orientation = Direction.VERTICAL;
	} else if(guide === 1 || guide === 3) {
		orientation = Direction.HORIZONTAL;
	}

    docRef.guides.add(orientation,activeLayerCoordinates[guide]);
}

// Trace top guide
traceGuide(2);