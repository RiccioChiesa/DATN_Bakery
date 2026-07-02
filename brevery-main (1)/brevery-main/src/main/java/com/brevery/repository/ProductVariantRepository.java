package com.brevery.repository;

import com.brevery.entity.ProductVariant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.EntityGraph;

import java.util.List;

@Repository
public interface ProductVariantRepository extends JpaRepository<ProductVariant, Long> {

    List<ProductVariant> findByProductProductId(Long productId);

    @EntityGraph(attributePaths = "product")
    List<ProductVariant> findByStockLessThan(int threshold);
}