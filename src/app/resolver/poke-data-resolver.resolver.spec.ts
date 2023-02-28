import { TestBed } from '@angular/core/testing';

import { PokeDataResolverResolver } from './poke-data-resolver.resolver';

describe('PokeDataResolverResolver', () => {
  let resolver: PokeDataResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokeDataResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
