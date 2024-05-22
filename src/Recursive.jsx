const Recursive = ({ data, callback, remove, handleResize, parent }) => {
  return (
    <>
      {data.map((child, i) => (
        <>
          {parent && i == 1 && (
            <div
              className="border border-black bg-black"
              onMouseDown={(e) => handleResize(e, parent?.id, parent.type)}
              style={{
                cursor: `${parent.type == "v" ? "col-resize" : "row-resize"}`,
                width: `${parent.type == "v" ? "3px" : "100%"}`,
                height: `${parent.type == "v" ? "100%" : "3px"}`,
              }}></div>
          )}
          <div
            key={i}
            className={` flex ${child.type === "v" ? "flex-row" : " flex-col"} 
           items-center justify-center`}
            style={{
              backgroundColor: `${!child.isParent && child.color}`,
              width: `${child.width}%`,
              height: `${child.height}%`,
            }}>
            {!child.isParent && (
              <div className="flex gap-4">
                <button
                  className="bg-white px-2"
                  onClick={() => callback(child.id, "v")}>
                  v
                </button>
                <button
                  className="bg-white px-2"
                  onClick={() => callback(child.id, "h")}>
                  h
                </button>
                <button
                  className="bg-white px-2"
                  onClick={() => remove(child.id)}>
                  -
                </button>
              </div>
            )}

            <Recursive
              data={child.childrens}
              callback={callback}
              remove={remove}
              handleResize={handleResize}
              parent={child}
            />
          </div>
        </>
      ))}
    </>
  );
};

export default Recursive;
