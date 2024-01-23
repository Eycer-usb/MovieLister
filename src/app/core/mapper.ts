abstract class Mapper<T, U> {
    abstract mapFrom(item: T): U;
    abstract mapTo(item: U): T;
}

export default Mapper;
