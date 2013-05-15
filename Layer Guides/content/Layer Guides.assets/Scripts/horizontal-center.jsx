//Select Active Layer
var docRef = app.activeDocument,
activeLayer = docRef.activeLayer;
activeLayerCoordinates = activeLayer.bounds;

function traceGuide() {
	left = activeLayerCoordinates[0];
	right = activeLayerCoordinates[2];
	center = ((right - left) / 2) + left ;
    docRef.guides.add(Direction.VERTICAL,center);
}

// Trace horizontalho center guide
traceGuide();