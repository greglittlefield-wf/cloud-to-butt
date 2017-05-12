walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea'
					|| node.classList.contains('ace_editor')) {
				return;
			}

			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDart/g, "Fart");
	v = v.replace(/dart\b/g, "fart");
	v = v.replace(/\bdart/g, "fart");

	textNode.nodeValue = v;
}


