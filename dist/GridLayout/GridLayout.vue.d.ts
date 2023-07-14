declare const _default: import("vue").DefineComponent<{}, {
    props: Readonly<import("vue").ExtractPropTypes<{
        autoSize: {
            default: boolean;
            type: BooleanConstructor;
        };
        breakpoints: {
            default: () => {
                lg: number;
                md: number;
                sm: number;
                xs: number;
                xxs: number;
            };
            type: import("vue").PropType<Breakpoints>;
            validator: any;
        };
        colNum: {
            required: true;
            type: NumberConstructor;
        };
        cols: {
            default: () => {
                lg: number;
                md: number;
                sm: number;
                xs: number;
                xxs: number;
            };
            type: import("vue").PropType<Breakpoints>;
            validator: any;
        };
        horizontalShift: {
            default: boolean;
            type: BooleanConstructor;
        };
        intersectionObserverConfig: {
            default: () => {
                root: any;
                rootMargin: string;
                threshold: number;
            };
            type: import("vue").PropType<IntersectionObserverConfig>;
            validator: any;
        };
        isDraggable: {
            default: boolean;
            type: BooleanConstructor;
        };
        isResizable: {
            default: boolean;
            type: BooleanConstructor;
        };
        layout: {
            required: true;
            type: import("vue").PropType<Layout>;
            validator: any;
        };
        margin: {
            default: () => number[];
            type: import("vue").PropType<number[]>;
            validator: any;
        };
        maxRows: {
            default: number;
            type: NumberConstructor;
        };
        preventCollision: {
            default: boolean;
            type: BooleanConstructor;
        };
        responsive: {
            default: boolean;
            type: BooleanConstructor;
        };
        responsiveLayouts: {
            default: () => {};
            type: import("vue").PropType<ResponsiveLayout>;
            validator: (value: ResponsiveLayout) => boolean;
        };
        rowHeight: {
            default: number;
            type: NumberConstructor;
        };
        useCssTransforms: {
            default: boolean;
            type: BooleanConstructor;
        };
        useObserver: {
            default: boolean;
            type: BooleanConstructor;
        };
        verticalCompact: {
            default: boolean;
            type: BooleanConstructor;
        };
    }>>;
    layoutKeys: any;
    validator: any;
    emit: (event: "container-resized" | "update:layout" | "layout-ready" | "update:breakpoint" | "layout-created" | "layout-before-mount" | "layout-mounted" | "item-resize" | "item-resized" | "item-move" | "item-moved" | "intersection-observe" | "intersection-unobserve", ...args: any[]) => void;
    emitter: any;
    layoutItemRequired: {
        h: number;
        i: number;
        w: number;
        x: number;
        y: number;
    };
    layoutItemOptionalKeys: string[];
    erd: any;
    isDragging: import("vue").Ref<boolean>;
    lastBreakpoint: BreakpointsKeys;
    lastLayoutLength: import("vue").Ref<number>;
    layouts: RecordBreakpoint<Layout>;
    mergedStyle: import("vue").Ref<{}>;
    originalLayout: Layout;
    placeholder: import("vue").Ref<{
        h: number;
        i: number;
        w: number;
        x: number;
        y: number;
    }>;
    width: import("vue").Ref<number>;
    observer: IntersectionObserver;
    wrapper: import("vue").Ref<HTMLDivElement>;
    gridItemProps: import("vue").ComputedRef<{
        breakpointCols: Breakpoints;
        colNum: number;
        containerWidth: number;
        isDraggable: boolean;
        isResizable: boolean;
        lastBreakpoint: any;
        margin: number[];
        maxRows: number;
        responsive: boolean;
        rowHeight: number;
        useCssTransforms: boolean;
        width: number;
    }>;
    observerCallback: (entries: any) => void;
    observerItems: any;
    layoutItemOptional: (props: {
        [key: string]: any;
    }) => {};
    requiredKeys: any;
    layoutUpdate: () => void;
    diff: any;
    findDifference: (layout: Layout, originalLayout: Layout) => Layout;
    uniqueResultOne: any;
    uniqueResultTwo: any;
    initResponsiveFeatures: () => void;
    updateHeight: () => void;
    height: any;
    containerHeight: () => string | undefined;
    onWindowResize: () => void;
    responsiveGridLayout: () => void;
    newBreakpoint: any;
    newCols: any;
    layout: any;
    onCreated: () => void;
    resizeEvent: ([eventName, id, x, y, h, w]: GridLayoutEvent) => void;
    layoutItem: any;
    l: any;
    hasCollisions: any;
    collisions: any;
    leastX: any;
    dragEvent: ([eventName, id, x, y, h, w]: GridLayoutEvent) => void;
    createObserver: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
