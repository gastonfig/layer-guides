//Select Active Layer
var docRef = app.activeDocument,
activeLayer = docRef.activeLayer;
activeLayerCoordinates = activeLayer.bounds;

function traceGuide() {
	bottom = activeLayerCoordinates[3];
	top = activeLayerCoordinates[1];
	center = ((bottom - top) / 2) + top ;
    docRef.guides.add(Direction.HORIZONTAL,center);
}

// Trace vertical center guide
traceGuide();